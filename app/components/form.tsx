'use client';
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { setUserInfo, userInfoValidate } from "../store/redusers/userFormInfoSlice";

function Form() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    checkbox: false,
    nameValid: false,
    telValid: false
  });
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    const isValid = type === 'tel' ? /^[0-9]{11,}$/.test(value) : /^[А-Яа-яЁёA-Za-z'-]+$/.test(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      [`${name}Valid`]: isValid
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setUserInfo({
      name: formData.name,
      tel: formData.tel,
      checkbox: formData.checkbox,
    }));
    
    if (formData.nameValid && formData.telValid) {
      dispatch(userInfoValidate({
        isValid: true
      }))
      try {
        
        const response = await fetch('https://run.mocky.io/v3/3b72984f-09a7-4928-956b-403f0904bb98', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const data = await response.json();
        return data;
        
      } catch (error) {
        console.error('Ошибка:', error);
      }
    } else {
      console.error('Ошибка валидации: некорректные данные');
    }
  };
 
  return (
    <div className="main__form" id="form">
      <h2 className="form__title">Отправь форму</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className={`form__input ${formData.name !== '' && formData.nameValid ? 'checkbox__field--valid' : '' ||
          formData.name !== '' && !formData.nameValid ? 'checkbox__field--novalid' : ''}`}>
          <label className="form__input-label" htmlFor="name"></label>
          <input
            className="checkbox__field-text"
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            autoComplete="off"
            value={formData.name}
            onChange={handleChange}
          />
          {formData.name !== '' && formData.nameValid ? <span className="valid"></span> : <span className="visually-hidden"></span>} 
          {formData.name !== '' && !formData.nameValid ? <span className="novalid"></span> : <span className="visually-hidden"></span>}
        </div>
        <div className={`form__input ${formData.tel !== '' && formData.telValid ? 'checkbox__field--valid' : '' ||
          formData.tel !== '' && !formData.telValid ? 'checkbox__field--novalid' : ''}`}>
          <label className="form__input-label" htmlFor="tel"></label>
          <input
            className="checkbox__field-tel"
            type="tel"
            id="tel"
            name="tel"
            placeholder="Телефон"
            autoComplete="off"
            value={formData.tel}
            onChange={handleChange}
          />
          {formData.tel !== '' && formData.telValid ? <span className="valid"></span> : <span className="visually-hidden"></span>} 
          {formData.tel !== '' && !formData.telValid ? <span className="novalid"></span> : <span className="visually-hidden"></span>}
        </div>
        <div className="form__input-checkbox">
          <label className="form__label-checkbox">
            <input
              className="checkbox__field visually-hidden"
              type="checkbox"
              id="id-checkbox"
              name="checkbox"
              autoComplete="off"
              checked={formData.checkbox}
              onChange={(event) => setFormData({ ...formData, checkbox: event.target.checked })}
            />
            <span className="checkbox__mark"></span>
            <span className="checkbox__text">Согласен, отказываюсь</span>
          </label>
        </div>
        <div className="form__input">
          <button
            className="form__button form__submit"
            type="submit"
            disabled={!formData.nameValid || !formData.telValid}
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form;