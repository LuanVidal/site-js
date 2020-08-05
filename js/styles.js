const style = `
<style>

        :root{
            --line-height: 10px;
            --happy-color: #f5f6fa;
        }

     h1{
            color: white;
            font-size: 2pc;
            letter-spacing: 2px;
            margin-bottom: 3rem;
            
        }

        *{
            margin: 0;
            padding: 0;
            border: none;
        }

        body{
            display: flex;
            justify-content: center;
            height: 100vh;
            align-items: center;
            background-color: #2d3436;
        }

        #root{
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            background-color: black;
            font-family:'Press Start 2P';
            width: 40vw;
            height: 70vh;
            min-width: 680px;
            text-align: center;
            padding-top: 4rem;   
        }
</style>`
const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend',style)