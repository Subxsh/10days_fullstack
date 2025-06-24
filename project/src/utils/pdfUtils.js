import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const generateEventPDF = async (event) => {
  const pdf = new jsPDF()
  
  // Add title
  pdf.setFontSize(20)
  pdf.text('Event Details', 20, 30)
  
  // Add event information
  pdf.setFontSize(12)
  let yPosition = 50
  
  const addLine = (label, value) => {
    pdf.setFont(undefined, 'bold')
    pdf.text(`${label}:`, 20, yPosition)
    pdf.setFont(undefined, 'normal')
    pdf.text(value, 60, yPosition)
    yPosition += 10
  }
  
  addLine('Title', event.title)
  addLine('Date', event.date)
  addLine('Time', event.time)
  addLine('Location', event.location)
  addLine('Category', event.category)
  
  if (event.maxAttendees) {
    addLine('Max Attendees', event.maxAttendees.toString())
  }
  
  // Add description
  pdf.setFont(undefined, 'bold')
  pdf.text('Description:', 20, yPosition)
  yPosition += 10
  
  pdf.setFont(undefined, 'normal')
  const splitDescription = pdf.splitTextToSize(event.description, 170)
  pdf.text(splitDescription, 20, yPosition)
  
  // Save the PDF
  pdf.save(`${event.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_event.pdf`)
}

export const printEventDetails = () => {
  window.print()
}