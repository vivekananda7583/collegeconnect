import nodemailer from "nodemailer";

export const sendInterestEmail = async (req, res) => {
  const { projectCreatorEmail, projectTitle, interestedUserName, interestedUserEmail } = req.body;

  if (!projectCreatorEmail || !projectTitle || !interestedUserName || !interestedUserEmail) {
    return res.status(400).json({ message: "Missing required fields", success: false });
  }

  try {
    // Configure transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password or email password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: projectCreatorEmail,
      subject: `Interest in your project: ${projectTitle}`,
      text: `Hello,

${interestedUserName} (${interestedUserEmail}) is interested in collaborating on your project titled "${projectTitle}".

Please contact them to discuss further.

Best regards,
CollegeConnect Team`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Interest email sent successfully", success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email", success: false });
  }
};
