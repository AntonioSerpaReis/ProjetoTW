import bcrypt from 'bcrypt';

export class LoginController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    init(formId) {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', (e) => this.handleLogin(e));
        }
    }

    async handleLogin(e) {
        e.preventDefault();

        const form = e.target;
        const username = form.querySelector('input[name="username"]').value;
        const password = form.querySelector('input[name="password"]').value;

        try {
            const user = await this.usersRepository.findByUsername(username);

            if (!user) {
                throw new Error("Credenciais inválidas.");
            }

            const isMatch = await bcrypt.compare(password, user.password);
            
            if (!isMatch) {
                throw new Error("Credenciais inválidas.");
            }

            alert("Login realizado com sucesso!");
            
        } catch (error) {
            console.error("Erro no login:", error);
            alert(error.message);
        }
    }
}