export default function Page() {
  return (
<div className="flex flex-col">

<div className="flex justify-center flex-col px-100 items-center gap-5">
<button className="bg-brand-primary text-white p-4 rounded w-full text-center">
Кнопка в цветах бренда
</button>

<button className="bg-brand-secondary text-white p-4 rounded w-full text-center">
Второстепеннаякнопкабренда
</button>

<div className="bg-success text-white p-4 rounded w-full text-center">
Сообщение об успехе
</div>

<div className="text-danger w-full text-center p-4 bg-white rounded">
Сообщение об ошибке
</div>

<button className="bg-blue p-3 rounded w-full text-center mt-20">Синяя кнопка</button>
<button className="bg-main p-3 rounded w-full text-center">Тоже синяя</button>
<button className="bg-my-favorite p-3 rounded w-full text-center">И это синяя</button>


</div>

</div>
);
}
