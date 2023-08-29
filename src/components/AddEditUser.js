import { useEffect } from "react"
import { useForm } from "../hooks/useForm"



const AddEditUser = ({selectUser, setSelectedUser, addUser, editUser}) => {

   

    const [formValues, handleFormValues, reset, setValues] = useForm({
        firstName: '',
        lastName: '',
        phone: ''
    })

    useEffect(() => {
        if(selectUser) {
            setValues(selectUser)
        } else {
            setValues({
                firstName: '',
                lastName: '',
                phone: ''
            })
        }
    },[selectUser])


    const handleSubmit = e => {
        e.preventDefault();
        if (selectUser) {
            editUser(selectUser.id, formValues);
        } else {
            addUser(formValues);
        }
        reset()
        //setSelectedUser(null);
    }

    const handleCancel = event => {
        event.preventDefault();
        if (selectUser) {
            setValues({
                firstName: selectUser.firstName,
                lastName: selectUser.lastName,
                phone: selectUser.phone
            })
        } else {
            setValues({
                firstName: '',
                lastName: '',
                phone: ''
            })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Fisrts Name" name="firstName" value={formValues.firstName} onChange={handleFormValues}/>
                <input type="text" placeholder="Last Name" name="lastName" value={formValues.lastName} onChange={handleFormValues}/>
                <input type="text" placeholder="phone" name="phone" value={formValues.phone} onChange={handleFormValues}/>
                <button type="submit" >ADD/EDIT</button>
                <button type="button" onClick={handleCancel}>CANCEL</button>
            </form>
        </div>
    )
}


export default AddEditUser