import { useForm } from "react-hook-form"

export default function Forms() {
const { register, handleSubmit, formState: { errors },} = useForm()
const onSubmit = (data) => console.log(data)

return(
<form onSubmit={handleSubmit(onSubmit)}>
  <div>
      <label>First Name</label>
      <input {...register("firstName", {required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} aria-invalid={errors.firstName ? "true" : "false"} />
      {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}
</div>
<div>
      
      <label>Last Name</label>
      <input {...register("lastName", { required: true, maxLength: 10 })}
      aria-invalid={errors.lastName ? "true" : "false"} />
            {errors.lastName?.type === "required" && (
        <p role="alert">Last name is required</p>
      )}
      </div>
      <input type="submit" />
    </form>

)
};