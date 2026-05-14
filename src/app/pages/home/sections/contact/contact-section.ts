import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

import { siteContent } from '../../../../core/data/site-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

interface EnquiryFormValue {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule, LucideAngularModule, RevealDirective],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css'
})
export class ContactSectionComponent {
  readonly content = siteContent;
  readonly submitted = signal(false);
  readonly sending = signal(false);

  async submit(form: NgForm): Promise<void> {
    const value = this.normalizeFormValue(form.value as EnquiryFormValue);

    if (this.sending() || form.invalid || !this.isValidEnquiry(value)) {
      form.control.markAllAsTouched();
      return;
    }

    const subject = 'Nature Green Enquiry';
    const body = [
      'New enquiry from Nature Green website:',
      '',
      `Name: ${value.name ?? ''}`,
      `Phone: ${value.phone ?? ''}`,
      `Email: ${value.email ?? ''}`,
      '',
      'Message:',
      value.message || 'I want to know more about Nature Green.',
      '',
      `Project Status: ${this.content.brand.possessionStatus}`
    ].join('\n');

    const payload = new FormData();
    payload.append('name', value.name ?? '');
    payload.append('phone', value.phone ?? '');
    payload.append('email', value.email ?? '');
    payload.append('message', value.message || 'I want to know more about Nature Green.');
    payload.append('_subject', subject);
    payload.append('_template', 'table');
    payload.append('_captcha', 'false');

    this.sending.set(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${this.content.brand.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload
      });

      if (!response.ok) {
        throw new Error('Email service did not accept the enquiry.');
      }

      this.submitted.set(true);
      form.resetForm();
    } catch {
      window.location.href = `mailto:${this.content.brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      this.submitted.set(true);
      form.resetForm();
    } finally {
      this.sending.set(false);
    }
  }

  private normalizeFormValue(value: EnquiryFormValue): Required<EnquiryFormValue> {
    return {
      name: value.name?.trim() ?? '',
      phone: value.phone?.trim() ?? '',
      email: value.email?.trim() ?? '',
      message: value.message?.trim() ?? ''
    };
  }

  private isValidEnquiry(value: Required<EnquiryFormValue>): boolean {
    const namePattern = /\S/;
    const phonePattern = /^[789]\d{9}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
      namePattern.test(value.name) &&
      phonePattern.test(value.phone) &&
      emailPattern.test(value.email) &&
      value.email.length <= 120 &&
      value.message.length > 0 &&
      value.message.length <= 500
    );
  }
}
