// Email service using EmailJS or direct mailto with enhanced functionality
export const sendEmail = async (formData) => {
  const { name, email, subject, message } = formData
  
  // Create email body
  const emailBody = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from Portfolio Contact Form
Time: ${new Date().toLocaleString()}
  `.trim()

  // Method 1: Direct mailto (works on all devices)
  const mailtoLink = `mailto:dkumar11dec2003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`
  
  // Method 2: For future backend integration
  const emailData = {
    to: 'dkumar11dec2003@gmail.com',
    from: email,
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00FF99;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        <div style="background: #fff; padding: 20px; border-radius: 8px; border-left: 4px solid #00FF99;">
          <h3>Message:</h3>
          <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <div style="margin-top: 20px; padding: 10px; background: #f0f0f0; border-radius: 4px; font-size: 12px; color: #666;">
          <p>Sent from Portfolio Contact Form on ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `,
    text: emailBody
  }

  // For now, use mailto. In production, you can integrate with EmailJS, Formspree, or your backend
  window.location.href = mailtoLink
  
  return { success: true, method: 'mailto' }
}

// Auto-reply function
export const sendAutoReply = (userEmail, userName) => {
  const autoReplySubject = "Thank you for contacting me!"
  const autoReplyBody = `
Hi ${userName},

Thank you for reaching out through my portfolio contact form. I have received your message and will get back to you as soon as possible, usually within 24-48 hours.

In the meantime, feel free to:
- Check out my projects: [Your Portfolio URL]/projects
- Connect with me on LinkedIn: [Your LinkedIn URL]
- Follow me on GitHub: [Your GitHub URL]

Best regards,
Deepak Kumar
Full Stack Developer

---
This is an automated response. Please do not reply to this email.
  `.trim()

  const autoReplyLink = `mailto:${userEmail}?subject=${encodeURIComponent(autoReplySubject)}&body=${encodeURIComponent(autoReplyBody)}`
  
  // Note: Auto-reply would typically be handled by your email server
  // This is just for demonstration
  console.log('Auto-reply would be sent to:', userEmail)
  
  return autoReplyLink
}