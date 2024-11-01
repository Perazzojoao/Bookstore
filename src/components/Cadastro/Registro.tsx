export function Registro() {
    return (
        <div className="flex justify-center items-center min-h-screen m-7">
            <form className="bg-white w-1/2 p-8 rounded-lg shadow-lg">
                <h2 className="text-lg text-black font-bold mb-6 text-center">Cadastro</h2>

                <label htmlFor="email" className="block mb-1 text-black">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="exemplo: JoãoFerreira44@gmail.com" 
                    className="border p-3 mb-4 w-full focus:outline-none text-black rounded-lg" 
                    required 
                />

                <label htmlFor="nome" className="block mb-1 text-black">Nome</label>
                <input 
                    type="text" 
                    id="nome" 
                    placeholder="Exemplo: Lucas Martins de Souza" 
                    className="border p-3 mb-4 w-full focus:outline-none text-black rounded-lg" 
                    required 
                />

                <label htmlFor="senha" className="block mb-1 text-black">Senha</label>
                <input 
                    type="password" 
                    id="senha" 
                    className="border p-3 mb-4 w-full focus:outline-none text-black rounded-lg" 
                    required 
                />
                 
                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg w-1/2 max-w-xs">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}