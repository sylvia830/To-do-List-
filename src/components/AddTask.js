import {useState} from "react"
const AddTask = ({onAdd}) => {
	const [text, setText] = useState("")
	const [deadline, setDeadline] = useState("")
	const [reminder, setReminder] = useState(false)

	const onSubmit =(e)=> {
		e.preventDefault() //doesnt actually submit to a page
		if(!text){
			alert("Please add a valid todo")
			return
		}

		onAdd({text, deadline, reminder})

		setText("")
		setDeadline("")
		setReminder(false)

	}

	return (
		<form className ="add-form" onSubmit ={onSubmit}>
			<div className="form-control">
				<label>Task</label>
				<input type ="text" placeholder="Add Todo" 
				value={text} 
				onChange ={(e)=> setText(e.target.value)}
				/>
			</div>

			<div className="form-control">
				<label>Deadline</label>
				<input type ="text" placeholder="Add your deadline" 
				value={deadline} 
				onChange ={(e)=> setDeadline(e.target.value)}/>
			</div>

			<div className="form-control form-control-check">
				<label>Reminder</label>
				<input 
				type ="checkbox"
				checked = {reminder} 
				value={reminder} 
				onChange ={(e)=> setReminder(e.currentTarget.checked)}/>
			</div>

	        <input type ="submit" value="Save" className="btn btn-block"/>
		
		</form>
	)
}

export default AddTask
