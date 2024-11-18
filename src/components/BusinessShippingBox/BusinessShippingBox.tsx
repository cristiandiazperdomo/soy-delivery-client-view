import {NewClientsSvg} from "../Svg/NewClientsSvg";

export const BusinessShippingBox = () => {
    return (
        <div className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl px-4 xl:px-0">
                <div className="order-1 lg:order-0 mx-auto xl:mx-0 max-w-full overflow-hidden">
                    <NewClientsSvg />
                </div>
                <div className="order-0 lg:order-1">
                    <h3 className="text-3xl md:text-5xl font-extrabold mb-10 text-center md:text-left">
                        La forma más flexible de hacer tus envíos
                    </h3>
                    <div>
                        <div className="bg-primary rounded-xl p-5 lg:ml-10">
                            <div className="text-white mb-4 leading-5">
                                <span className="text-black font-bold">
                                    ¡Emprende sin límites!
                                </span>{" "}
                                Con nuestra cuponera para emprendedores, accede
                                a envíos para tu negocio, con la comodidad de
                                pagar con Mercado pago. ¡Podrás usar los cupones
                                sin fecha de vencimiento!
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-12">
                                <ul className="space-y-6 p-5 bg-white rounded-xl">
                                    {[
                                        {ships: 15, price: 1500},
                                        {ships: 50, price: 2500},
                                        {ships: 120, price: 5000},
                                    ].map(({ships, price}, index) => (
                                        <div className="flex space-x-4">
                                            <div className="flex items-center">
                                                <input
                                                    id={"radio" + index}
                                                    type="radio"
                                                    name={"ships"}
                                                    className="hidden"
                                                />
                                                <label
                                                    htmlFor={"radio" + index}
                                                    className="flex items-center cursor-pointer"
                                                >
                                                    <span className="w-6 h-6 inline-block mr-1 border border-primary rounded-sm"></span>
                                                    <p className="pl-4">
                                                        {ships} Envíos - $
                                                        {price}
                                                    </p>
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </ul>
                                <div>
                                    <button className="bg-gray text-sm text-white py-3 px-8 rounded-md font-bold w-full">
                                        Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
