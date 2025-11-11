import {
  Header,
  MenuItem,
  OrderContents,
  OrderTotals,
  TipPercentageForm,
} from "./components";
import { menuItems } from "./data";
import { useOrder } from "./hooks";

function App() {
  const {
    addItem,
    order,
    placeOrder,
    removeItem,
    setTip,
    tip,
  } = useOrder();

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-10 md:gap-16">
        {/* ======== SECCIÓN MENU ======== */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100 dark:border-gray-800">
          <h2 className="text-4xl font-extrabold text-teal-700 dark:text-teal-400 mb-8 text-center">
            Menú
          </h2>

          <div className="space-y-4">
            {menuItems.map((menuItem) => (
              <MenuItem
                key={menuItem.id}
                addItem={addItem}
                menuItem={menuItem}
              />
            ))}
          </div>
        </section>

        {/* ======== SECCIÓN ORDEN ======== */}
        <section className="self-start bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-10 flex flex-col justify-between shadow-inner">

          {
            order.length === 0
              ? (
                <p className="text-center text-gray-500 italic">
                  La orden está vacía 🍽️
                </p>
              )
              : (
                <>
                  <div className="space-y-10">

                    <OrderContents order={order} removeItem={removeItem} />

                    <div className="border-t border-gray-300 pt-6">
                      <TipPercentageForm
                        tip={tip}
                        setTip={setTip} />
                    </div>
                  </div>

                  <div className="border-t border-gray-300 pt-8 mt-8">
                    <OrderTotals
                      order={order}
                      tip={tip}
                      placeOrder={placeOrder}

                    />
                  </div>
                </>
              )

          }




        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-10">
        <p>© {new Date().getFullYear()} Calculadora de propinas por Sebastián</p>
      </footer>
    </>
  );
}

export default App;
