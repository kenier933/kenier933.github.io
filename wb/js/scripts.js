document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('密码和确认密码不一致，请重新输入');
        return;
    }

    // 在这里添加将用户信息存储到数据库的逻辑
    // 例如：调用API或使用本地存储

    alert('注册成功');
});