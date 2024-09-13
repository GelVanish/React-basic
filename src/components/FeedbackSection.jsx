import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");
  return (
    <section>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input type="text" id="name" className="control" />

        <label htmlFor="reason">Причина обращения</label>
        <select id="reason" className="control">
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <Button>Отправить</Button>
      </form>
    </section>
  );
}
