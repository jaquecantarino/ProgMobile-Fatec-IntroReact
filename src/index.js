import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const App = () => {
  const estilosBotao = {marginTop:12, paddingTop:8, paddingBottom:8, backgroundColor:'blueviolet', color: 'white', border:'none', width:'100%', borderRadius:8}
  
  const textoDoRotulo = 'Nome:'

  const obterTextoDoBotao = () => "Enviar"

  return (
    //quando vamos adicionar css num arquivo precisamos colocar dentro de chaves duplas, e os valores são int ou string
    <div style={{margin:'auto', width:768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>

      <label className='rotulo' htmlFor="nome" style={{display:"block", marginBottom: 4, }}>{textoDoRotulo}</label>
      <input type="text" id='nome' style={{paddingTop:8, paddingBottom:8, borderStyle:'hidden', width:'100%', borderRadius:8}} />

      <button style={estilosBotao}>{obterTextoDoBotao()}</button>
      {/*renderizar = deixar pronto -- Desse caso fazemos o obterTextoDoBotao() quando eu quero que a função já fique pronta*/}
    </div>
  )
}

//emmet = você da origem por código pequeno e obtem um código grande.

ReactDOM.render(
  <App />,
  document.querySelector('#root')  
)