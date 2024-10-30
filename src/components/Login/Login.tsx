export function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen text-center bg-black">
            <form className="flex flex-col justify-center items-center w-3/4 max-w-md p-6 rounded-2xl shadow-lg m-5 bg-white h-auto min-h-[400px]"> {/* Ajuste a altura mínima aqui */}
                <label htmlFor="email" className="text-4xl mb-4 text-black">Login</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                    required
                    className="m-4 p-4 border rounded-xl w-full focus:outline-none text-black"
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                    required
                    className="m-4 p-4 border rounded-xl w-full focus:outline-none text-black"
                />
                <button type="submit" className="mt-4 bg-purple-800 rounded-2xl text-white p-4 w-2/4 font-serif text-lg">Entrar</button>
            </form>
        </div>
    );
}