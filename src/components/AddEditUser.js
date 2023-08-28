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
                fisrtName: '',
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Fisrts Name" name="firstName" value={formValues.firstName} onChange={handleFormValues}/>
                <input type="text" placeholder="Last Name" name="lastName" value={formValues.lastName} onChange={handleFormValues}/>
                <input type="text" placeholder="phone" name="phone" value={formValues.phone} onChange={handleFormValues}/>
                <button type="submit" >ADD/EDIT</button>
            </form>
        </div>
    )
}


export default AddEditUser