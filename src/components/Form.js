import { useForm } from "react-hook-form"

export default function Form() {
const { register, handleSubmit } = useForm()
const onSubmit = (data) => console.log(data)

return(
<form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Last Name</label>
      <imput {...register("gender")} />
  
      <input type="submit" />
    </form>

)
};