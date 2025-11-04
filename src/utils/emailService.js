// Simple email service simulation
export const sendEmail = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // For demo purposes, always succeed
  console.log('Email would be sent:', formData)
  return { success: true }
}