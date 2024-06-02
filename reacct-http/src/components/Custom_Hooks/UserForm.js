import React from 'react'
import useInput from './Hooks/useInput'

function UserForm() {

    const [fname, bindFname, resetfname] = useInput('')
    const [sname, bindSname, resetSname] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${fname} ${sname}`)
        resetSname()
        resetfname()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input
                        {...bindFname}
                        type='text' />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        {...bindSname}
                        type='text' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
