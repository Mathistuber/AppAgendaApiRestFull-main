import Api from './Api';

export async function visualizarContatos(id){
    try {
        const resultados = await Api.get(`/contatos/${id}/`);
        return resultados.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function cadastrarContatos(id,nome,fone,email){
    try {
        await Api.post(`/contatos`,{
            id:id,
            nome:nome,
            fone:fone,
            email:email
        });
        return 'sucesso';
    } catch (error) {
        console.log(error);
        return [];
    }
}
export async function deletarContatos(id,nome,fone,email){
    try {
        await Api.delete(`/contatos/${id}/`);
        return 'Sucesso';
    } catch (error) {
        console.log(error);
        return [];
    }
}
export async function alterarContatos(id,nome,fone,email){
    try {
        await Api.put(`/contatos/${id}/`,{
            id:id,
            nome:nome,
            fone:fone,
            email:email
        }
        );
        return 'Sucesso';
    } catch (error) {
        console.log(error);
        return [];
    }
}