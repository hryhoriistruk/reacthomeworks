import { joiResolver } from "@hookform/resolvers/joi";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { postValidator } from "../validators/post.validator";

export interface IPostFormProps {
  handlePostForm: (data: IPostForm) => void;
}

export interface IPostForm {
  userId: number;
  title: string;
  body: string;
}

const FormComponent: FC<IPostFormProps> = ({ handlePostForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostForm>({
    mode: "all",
    resolver: joiResolver(postValidator),
  });

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit(handlePostForm)}>
        <label>
          Post Title:
          <br />
          <input type="text" {...register("title")} />
          {errors.title && <span>{errors.title.message}</span>}
        </label>
        <br />
        <br />
        <label>
          Post Body:
          <br />
          <textarea {...register("body")} />
          {errors.body && <span>{errors.body.message}</span>}
        </label>
        <br />
        <br />
        <button>save</button>
      </form>
    </div>
  );
};

export default FormComponent;
