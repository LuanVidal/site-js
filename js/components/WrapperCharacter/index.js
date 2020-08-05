const pathfire = './img/fogo-pequeno.png'
const fire = character`
     width: 110px;
     ${pathfire}
`
const WrapperCharacters = (css, children) => (`
    <div style="${css}">${children}</div>
`)

const wrapperCharacters  = WrapperCharacters`
    display: flex;
    justify-content:space-evenly;
    ${fire +   fire  + fire}
`



