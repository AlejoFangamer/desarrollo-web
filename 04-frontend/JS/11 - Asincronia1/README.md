# Exposicion

## Callbacks

Un callback es cuando le asignamos una funcion como parametro a otra funcion y esta se ejecuta al realizar cierta operacion o evento.

Su funcion depende mucho de las circunstancias , pero en general , como se ha dicho , es para decirle al codigo que realice cierta operacion despues de alguna acción.

Tomemos el ejemplo del addEventListener , que por defecto toma como parametros una accion y una funcion , al momento de usar esta funcion ya habremos hecho un callback porque estamos llamando a cierta funcion a travez del parametro de una función.

Obviamente , los callbacks se pueden realizar en terminos mas complejos como tomar parametros de otras funciones o probar variaciones de eventos con el cambio de una sola funcion.

## Promesas

Las promesas en terminos simple se trata de la terminacion o en el peor de los casos , el fracaso de un codigo.

Y tu podrias decirme que entre el Try catch y las promesas son casi iguales , pero no , su diferencia es que el try catch es para codigo sincrono mientras que las promesas son para trabajos asincronos , como manejos se red y/o cosas iguales.

tambien es casi igual que un callback , solo que en vez de llamar a una funcion , adjunta funciones de callback que ayudan en la llamada de ciertas operaciones que sucedan en el codigo (Pendiente, resuelta o rechazada).

## Async / Await

Es tambien una expresion asincrona que se asemeja mucho a lo que realizaria un codigo sincrono.

Tenemos por ejemplo , un codigo que carga una api realmente extensa que js tiene que cargar , como esta accion tarda lo suyo puede que la aplicacion en general se quede congelado cargando la informacion , es por ello que se utiliza async/await que se usar para cargar operaciones asincronas aparte con una espera de que estas carguen o no carguen y puedan dar flujo normal al siguiente codigo.

Si pusieramos un promise de varios elementos pero si la promesa falla toda el await falla consigo generando un error.

## Fetch

Es una funcion que tiene como objetivo principal realizar solicitudes de red y recursos desde servidores o APIs.

Con el fetch se pueden realizar solicitudes HTTP como GET, POST, PUT o DELETE , pero por defecto fetch solo recolecta la informacion de la fuente proporcionada (GET).

Un fetch devuelve una promesa , es por ello que podemos utlizar el .then y el .catch para manejar el resultado de la promesa y la respuesta de la solicitud.
