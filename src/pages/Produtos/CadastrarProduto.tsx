import '../style.css';

export default function CadastrarProduto() {
    return (
        <div className="container">
            <h2 className='mb-4 text-center'>Cadastro de Produto</h2>
            <div className="card shadow border p-4">
                <form>
                    <div className="row mt-4 mb-3">
                        <div className="col-md-6">
                            <label htmlFor="produto" className="form-label">Produto</label>
                            <input type="text" className="form-control" id="produto" placeholder="Digite o nome do produto" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="preco" className="form-label">Preço do Produto</label>
                            <input type="text" className="form-control" id="preco" placeholder="R$0,00" />
                        </div>
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-purple mt-2">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};