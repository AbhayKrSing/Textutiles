import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    const [text, NewText] = useState("");
    // let returnFn = () => {
    //     if (props.color === 'white') return 'primary'
    //     else if (props.color === 'green') return 'success'
    //     else if (props.color === 'yellow') return 'warning'
    //     else if (props.color === 'lightblue') return 'info'
    //     else return 'primary'
    // }
    let onclickfn_1 = (event) => {
        /* console.clear()
           console.log(event)  //event active happened
           console.log(event.target) */
        event.preventDefault()
        // console.log("Convert button was pressed")
        NewText(text.toUpperCase())
        props.ShowAlert('letter successfully converted', 'success')
    }
    let onclickfn_2 = (event) => {
        /*   console.clear()
           console.log(event)  //event active happened
           console.log(event.target) */
        event.preventDefault()
        // console.log("Convert button was pressed")
        NewText(text.toLowerCase())
        props.ShowAlert('letter successfully converted', 'success')

    }
    let onchangefn = (event) => {
        /*   console.log(event)
           console.log(event.target)
           console.log("change occur") */
        NewText(event.target.value)
    }
    let processor = (event) => {
        if (/-->/.test(text) === false) {
            event.preventDefault()
            let obj = {}
            for (let i in text.split(' ')) {
                if (obj[text.split(' ')[i]] === undefined) { obj[text.split(' ')[i]] = 1 }
                else obj[text.split(' ')[i]]++
            }
            let arr = []
            for (let key in obj) {
                arr.push(`${key}-->${obj[key]}`)
            }
            let str = arr.join('   ')
            NewText(str)
            props.ShowAlert('letter successfully processed', 'success')
        }
        else {
            event.preventDefault()
            NewText('')
            props.ShowAlert('letter successfully processed and showned Before', 'success')
        }


    }
    let Remove_unusualSpaces = (event) => {
        event.preventDefault()
        NewText(text.split(/\s+/).join(" "))
        props.ShowAlert('unusualSpaces successfully removed', 'success')

    }
    return (
        <>
            <div className="container">
                <form className={`container  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <h1 className={`container  text-${props.mode === 'light' ? 'dark' :'light'}`}>{props.heading}</h1>
                    <textarea name="" className={`form-control  mt-3`} style={{ background: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} id='form-contral' cols="90" rows="10" value={text} onChange={onchangefn}></textarea>
                    <button type="text" className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mt-3`} onClick={onclickfn_1}>click to convert text to Uppercase</button>
                    <button type="text" className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mt-3 ms-3`} onClick={onclickfn_2}>click to convert text to lowercase</button>
                    <button type='text' className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mt-3 ms-3`} onClick={processor}>click only ones to count words</button>
                    <button type='text' className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mt-3 ms-3`}>Reload</button>
                    <button type='text' className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mt-3 ms-3`} onClick={Remove_unusualSpaces}>Remove unusual spaces</button>
                </form>

            </div>
            <div className={`container  text-${props.mode === 'light' ? 'dark' : 'light'}`}> {/*text-${returnFn() === 'success' ? 'light' : 'dark'}*/}{/*if navbar is used then comment out colorMode fn and comment in navbar function*/}
                <h2>Text Summary</h2>
                <p>Your words {text.split("").length===0 ? 0 : text.split(' ').length } Your character {text.length}</p>   {/* -1 isliye karna pada kyuki word text.split(" ").length gives default value for empty string */}
            </div>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}> {/*text-${props.mode === 'light' ? 'dark' : 'light'}*/}
                <h4>Time taken to this word is {0.3 / 100 * text.length} minutes</h4>
            </div>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}> {/*text-${returnFn() === 'primary' ? 'dark' : returnFn() === 'success' ? 'light' : returnFn() === 'warning' ? 'dark' : returnFn() === 'info' ? 'dark' : ''}*/}
                <h2>Preview</h2> 
                <p>{text === '' ? 'Enter something to preview' : text}</p>  
            </div>       {/*          */}
        </>
    )
}
TextForm.defaultProps = {
    heading: 'Set Titles',
};
TextForm.propTypes = {
    heading: PropTypes.string.isRequired,            //propTypes set data types of passed props
};
