export function Registro() {
    return (
        <div className="flex justify-center items-center min-h-screen m-7 bg">
            <form className="bg-white w-full sm:w-3/6 p-8 rounded-lg shadow-lg">
                <h2 className="text-black font-bold mb-6 text-center font-mono text-5xl">Cadastro</h2>

                <div className="flex flex-col items-center">
                    <label htmlFor="email" className="block m-3 font-sans text-2xl text-black">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Exemplo: JoãoFerreira44@gmail.com"
                        className="border-2 p-3 mb-4 w-full sm:w-3/5 focus:outline-none focus:border-purple-800 text-black rounded-lg"
                        required
                    />

                    <label htmlFor="nome" className="block m-3 font-sans text-2xl text-black">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Exemplo: Lucas Martins"
                        className="border-2 p-3 mb-4 w-full sm:w-3/5 focus:outline-none focus:border-purple-800 text-black rounded-lg"
                        required
                    />

                    <label htmlFor="senha" className="block m-3 text-2xl font-sans text-black">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        className="border-2 p-3 mb-4 w-full sm:w-3/5 focus:outline-none focus:border-purple-800 text-black rounded-lg"
                        required
                    />

                    <label htmlFor="senha2" className="block m-3 text-2xl font-sans text-black">Repita a senha:</label>
                    <input
                        type="password"
                        id="senha2"
                        className="border-2 p-3 mb-4 w-full sm:w-3/5 focus:outline-none focus:border-purple-800 text-black rounded-lg"
                        required
                    />
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="bg-gradient-to-r from-green-400 to-purple-600 text-white rounded-2xl m-4 p-5 w-full sm:w-1/3 max-w-xs text-xl">Cadastrar</button>
                </div>

                <span className="text-black justify-center items-center flex m-3 hover:text-purple-800">
                    <a href="/login">Já tem uma conta? <strong>clique aqui</strong></a>
                </span>
            </form>
        </div>
    );
}
