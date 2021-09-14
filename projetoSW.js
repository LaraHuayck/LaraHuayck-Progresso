function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosLara = ['Thais', 'Thalia', 'Rodrigo', 'Lorran', 'Ju', 'Rick', 'Matheus', 'Ralf', 'Lara']
    if (ConvidadosLara.includes(NomeConvidado)) { 
    document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar!'
} else{
    document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar!'
    }
}