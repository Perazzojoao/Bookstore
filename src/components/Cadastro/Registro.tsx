export function Registro() {
    return (
        <div className="flex justify-center items-center min-h-screen m-7">
            <form className="bg-white w-3/6 p-8 rounded-lg shadow-lg">
                <h2 className="text-black font-bold mb-6 text-center font-mono text-4xl">Cadastro</h2>

                <label htmlFor="email" className="block m-3 font-sans  text-2xl text-black">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Exemplo: JoãoFerreira44@gmail.com"
                    className="border-2 p-3 mb-4 w-3/5 focus:outline-none focus:border-purple-800 text-black rounded-lg"
                    required
                />

                <label htmlFor="nome" className="block m-3 font-sans text-2xl text-black">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    placeholder="Exemplo: Lucas Martins"
                    className="border-2 p-3 mb-4 w-3/5 focus:outline-none focus:border-purple-800 text-black rounded-lg"
                    required
                />


                <label htmlFor="senha" className="block m-3  text-2xl font-sans text-black">Senha:</label>
                <input
                    type="password"
                    id="senha"
                    className="border-2 p-3 mb-4 w-3/5 focus:outline-none focus:border-purple-800 text-black rounded-lg"
                    required
                />

                <div className="flex justify-center">
                    <button type="submit" className="bg-gradient-to-r from-green-400 to-purple-600 text-white rounded-2xl m-4 p-5  w-1/3 max-w-xs text-xl">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}
