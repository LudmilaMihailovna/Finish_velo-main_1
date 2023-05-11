import css from './theft.module.scss'
import {Modal} from "../modal/Modal";
import { useState } from "react";
import {useForm} from "react-hook-form";
import {createCase} from "../../../../api/createCase";
export const Theft = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    return (
      <div className={css.theft}>
        <button onClick={openModal}>Сообщить о краже</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <MessageContent />
        </Modal>
      </div>
    )
}


const MessageContent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createCase(data)
  }
  return(
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <label htmlFor={'licenseNumber'}>{'Номер лицензии'}</label>
      <input type={'text'} {...register("licenseNumber")} />
      <label htmlFor={'ownerFullName'}>{'Имя владельца'}</label>
      <input type={'text'} {...register("ownerFullName")} />
      <select {...register("type")}>
        <option value="sport">sport</option>
        <option value="general">general</option>
      </select>
      <input type="submit" />
    </form>
  )
}
