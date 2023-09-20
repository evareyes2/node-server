# Lista de tareas
*** 


## ¿Qué sucedió al usar async y await?
Al modificar las funciones para que retornen una promesa y usar 'async' y 'await' hace que el flujo de control sea más legible y facil de entender, ya que cada promesa se resulve antes de continuar con la sigueinte accion, ejecuntandose de manera secuencia. 'async' y 'await' también nos permite que las opreaciones se ralicen en el orden que pongamos en el codigo. 

## ¿Qué sucedió al usar el método then()?
Al usar el método '.then' nos aseguramos de manejar el resultado exito de una promesa. Y así podemos definir acciones personalizadas que se ejecutarán cuando las operaciones asincrónicas tengan éxito. aunque con este metodo el cosdigo podria volverse mas complicado, por que tendriamos que encadenar mas acciones. 

## ¿Qué diferencias encontraste entre async, await y el método then()?
El método then() se utiliza para manejar el resultado exitoso de una promesa. 
'async' y 'await' nos facilita la comprension y legibilidad del codigo y cuando se trata de errores es mas facil manejarlos con 'try' y 'catch'
