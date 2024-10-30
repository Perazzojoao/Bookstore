export function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen text-center">
            <form className="flex flex-col justify-center items-cente">
                <label htmlFor="email" className="text-4xl mb-4">Login</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                    required
                    className="m-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                    required
                    className="m-2 p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="mt-4 bg-purple-800  text-white p-2 rounded">Entrar</button>
            </form>
        </div>
    );
}