
const acessoWhats = (nome, local) =>{

    const nWhats = "551195833-9159";
    let link = `https://api.whatsapp.com/send?phone=${nWhats}&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20ir%20para%3A%20${local}.`;
    window.open(link, '_blank');
}
