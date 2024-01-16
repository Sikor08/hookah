import mongoose from "mongoose";
const GoodModal = new mongoose.Schema({
	// схема ( какие поля)
	vendoreсode: { type: Number, required: true }, //required: true обязательно, мы говорим что без логина не создастся
	brand: { type: String, required: true },
	name: { type: String, required: true },
    weight: {type: Number, required: true},
    isDiscount: {type: Boolean, default: false},
    height : {type: Number, required: true}
});

export default mongoose.model("good", GoodModal); // аргументы - название модели и сама модель
