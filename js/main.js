VANTA.NET({
    el: "#NET",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x240fd4,
    backgroundColor: 0x11003b,
    spacing: 14.00
  })

   /* JavaScript إضافة هذا الكود لملف */
   document.querySelector('.services-toggle')?.addEventListener('click', function() {
    document.querySelectorAll('.services-content').forEach(el => {
      el.style.display = 'block';
    });
    this.style.display = 'none';
  });