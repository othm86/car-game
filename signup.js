
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const birthdate = document.getElementById('birthdate').value;
  const consent = document.getElementById('consent').checked;

  const userData = {
    username,
    email,
    password,
    birthdate,
    consent
  };

  // حفظ البيانات محليًا
  localStorage.setItem('userData', JSON.stringify(userData));

  if (consent) {
    // إرسال البيانات إلى بريدك باستخدام EmailJS
    emailjs.send("service_51wtf0w", "template_65tz7me", {
      username: username,
      email: email,
      password: password,
      birthdate: birthdate
    }, "yUDQHx3isE9zPihRh")
    .then(function(response) {
      alert("تم إنشاء الحساب وإرسال البيانات بنجاح.");
      window.location.href = "index.html"; // الانتقال للعبة
    }, function(error) {
      alert("حدث خطأ أثناء الإرسال: " + error.text);
    });
  } else {
    alert("تم إنشاء الحساب. لن يتم إرسال البيانات.");
    window.location.href = "index.html"; // الانتقال للعبة
  }
});
