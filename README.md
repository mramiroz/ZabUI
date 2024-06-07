# Indice

- [Indice](#indice)
- [Descripción general del proyecto](#descripción-general-del-proyecto)
- [Analisis y diseño de la base de datos](#analisis-y-diseño-de-la-base-de-datos)
  - [Colección de usuarios](#colección-de-usuarios)
  - [Colección de componentes](#colección-de-componentes)
- [Aspectos funcionales y de diseño de la aplicación](#aspectos-funcionales-y-de-diseño-de-la-aplicación)
  - [Aspectos funcionales](#aspectos-funcionales)
  - [Diseño y estructura de la aplicación](#diseño-y-estructura-de-la-aplicación)
    - [Librería de componentes](#librería-de-componentes)
    - [Aplicación web](#aplicación-web)
- [Implementación de la aplicación](#implementación-de-la-aplicación)
- [Interfaz de usuario](#interfaz-de-usuario)

# Descripción general del proyecto

ZabUI es una aplicación web que sirve de repositorio de una libreria de componentes de React esta librería esta creada por mi y esta publicada en el gestor de paquetes de npm. La aplicación web permite visualizar los componentes de la librería, copiar el código de ejemplo de uso del componente, además de poder ver una previsualización personalizada a tiempo real de los componentes. Como funcionalidad extra se ha añadido la posibilidad de que los usuarios se registren y puedan añadir componentes como favoritos y tenerlos en su apartado de perfil.

Las principales tecnologías utilizadas en el proyecto son el framework de NextJS para la aplicación web, la librería de react para los componentes, para los estilos de los componentes se usa tailwindcss y para la base de datos he utilizado mongodb. El proyecto se encuentra en un repositorio de github y se ha desplegado en vercel.

# Analisis y diseño de la base de datos

El tipo de base de datos utilizada es mongodb, es una base de datos nosql que almacena los datos por colecciones y documentos de tipo json. He elegido esta base de datos ya que se adapta a la perfección a la estructura de los datos que se van a almacenar en la aplicación web además al utilizar un sistema de autenticación y agregar componentes favoritos a un usuario, la gestión de muchos cambios en la base de datos es más sencilla que en una base de datos relacional como mysql.

La base de datos se compone de cuatro colecciones, users, components, props y componentsProps. Para la gestión de la base de datos he utilizado la librería de npm mongoose que facilita la conexión con la base de datos y la creación de los modelos de los documentos mediante esquemas.

## Colección de usuarios

El esquema de la colección de usuarios es el siguiente:

```javascript
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Email is invalid"
        ]
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    favComps: {
        type: Array,
        default: []
    }
}, {timestamps: true});

UserSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const User = mongoose.models.User || mongoose.model("User", UserSchema, "Users");

export default User;
```

Los atributos que se almacenan en la colección de Users son el nombre, la contraseña, el email, el rol y los componentes favoritos.

- **Name** es un string que es único y es requerido.
- **Password** es un string que es requerido, no se muestra en las consultas cuando se obtiene un usuario, además antes de guardar el usuario en la base de datos se encripta la contraseña mediante la librería bcrypt.
- **Email** es un string que es único, es requerido y tiene que cumplir una expresión manejada por regex, que es un email válido.
- **Rol** es un string que tiene que ser admin o user, por defecto es user.
- **FavComps** es un array que almacena los ids de los componentes favoritos del usuario.

## Colección de componentes

El esquema de la colección de componentes es el siguiente:

```javascript
import mongoose from "mongoose";

const { Schema } = mongoose;

const componentSchema = new Schema({
  title: { 
    type: String,
    required: true 
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  import: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  component: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const Component = mongoose.models.Component || mongoose.model("Component", componentSchema, "Components")

export default Component;
```

Los atributos que se almacenan en la colección de Components son el título, la descripción, la categoría, las props, el import, el código, el componente y los likes.

- **Title** es un string que es requerido. Que es el el titulo del componente en la aplicación web.
- **Description** es un string que es requerido. Que es una breve descripción del componente.
- **Category** es un string que es requerido. Que es la categoría a la que pertenece el componente.
- **Import** es un string que es requerido. Que es el import del componente desde el paquete de npm.
- **Code** es un string que es requerido. Que es un código de ejemplo para que el usuario pueda pegarlo en su proyecto y aplicar el componente expuesto.
- **Component** es un string que es requerido. Que es el nombre del componete para luego poder visualizarlo en la aplicación web.
- **Likes** es un número que por defecto es 0. Que es el número de likes que tiene el componente dado por los usuarios.

## Colección de props

El esquema de la colección de props es el siguiente:

```javascript
import mongoose from "mongoose";

const { Schema } = mongoose;

const propsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    required: true
  }
}, { timestamps: true });

const Props = mongoose.models.Props || mongoose.model("Props", propsSchema, "Props");

export default Props;
```

Los atributos que se almacenan en la colección de Props son el nombre, la descripción, el tipo y si es requerido.

- **Name** es un string que es requerido. Que es el nombre de la prop.
- **Description** es un string que es requerido. Que es una breve descripción de la prop.
- **Type** es un string que es requerido. Que es el tipo de dato de la prop.
- **Required** es un booleano que es requerido. Que indica si la prop es requerida o no a la hora de mostrarlo como prop personalizable.

## Colección de componentsProps

El esquema de la colección de componentsProps es el siguiente:

```javascript
import mongoose from "mongoose";

const { Schema } = mongoose;

const componentsPropsSchema = new Schema({
  component: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Component",
    required: true
  },
  prop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Props",
    required: true
  },
  value: {
    type: String,
    required: true
  }
}, { timestamps: true });

const ComponentsProps = mongoose.models.ComponentsProps || mongoose.model("ComponentsProps", componentsPropsSchema, "ComponentsProps");

export default ComponentsProps;
```

Los atributos que se almacenan en la colección de ComponentsProps son el componente, la prop y el valor. ComponentsProps es una colección que relaciona los componentes con las props que tienen y el valor de la prop en dicho componente.

- **Component** es un ObjectId que es requerido. Que es el id del componente.
- **Prop** es un ObjectId que es requerido. Que es el id de la prop.
- **Value** es un string que es requerido. Que es el valor de la prop en el componente.

# Aspectos funcionales y de diseño de la aplicación

## Aspectos funcionales

Los principales aspectos funcionales de la aplicación web son los siguientes:

- **Mostrar componentes**: haciendo una previsualización de los componentes de la librería de npm en la aplicación web.
- **Copiar codigo ejemplo**: se proproporciona un código de ejemplo más la previsualización para ver como aplicar el componente en el proyecto del usuario, además se puede copiar el código de ejemplo.

## Diseño y estructura de la aplicación

Existen dos directorios principales que cada uno tiene su propio proyecto de npm el primero es el directorio de la librería de componentes y el segundo es el directorio de la aplicación web.

### Librería de componentes

El directorio de la librería de componentes se compone de los siguientes directorios y archivos:

- **Components**: es el directorio donde se encuentran los componentes de la librería.
  - **Gestionado por categorias**: los componentes se encuentran en directorios que se llaman igual que la categoría a la que pertenecen.
- **Dist**: es el directorio donde se encuentran los componentes compilados.
- **index.js**: es el archivo de entrada a la librería donde se exportan todos los componentes.
- **Otros**: package.json, tailwind.config.js, postcss.config.js, etc. Son archivos de configuración de la librería.

### Aplicación web

El directorio de la aplicación web se compone de una estructura de nextjs que se compone de los siguientes directorios y archivos:

**Public**: es el directorio con los archivos estáticos de la aplicación, donde se encuentran principalmente las imágenes y svg.

**SRC**: Es el directorio fuente de la aplicación que se divide en distintas partes.

- **Actions**: es el directorio donde se encuentran las server actions de la aplicación dividida por funcionalidades. Las server actions se ejecutan en el servidor y devuelven los datos al cliente despues de haber sido procesados.
- **App**: es el directorio donde se encuentran las páginas web de la aplicación gestionadas por el router de nextjs. Utilizo un una plantilla para todas las páginas donde solo cambia el contenido del main al redirigir a otra página. En la pagina es donde se hacen las llamadas a las server actions
- **Components**: es el directorio donde se encuentran los componentes de la aplicación web, estructurados por funcionalidad y son reutilizables en todas las aplicaciones.
- **Lib**: Contiene principalmente utilizades pero únicamente se utiliza para la gestión de conexión con la base de datos.
- **Models**: Contiene los schemas de mongoose de User y Component. Para conectar con la base de datos.
- **Styles**: Contiene los estilos de la aplicación web, donde se importa tailwind y se definen los estilos en css.
- **Middleware.ts**: Es el archivo de typescript que se encarga de gestionar que un usuario esté o no autenticado pueda acceder a las rutas que se le permiten.
  
# Implementación de la aplicación

Los lenguajes de programación utilizados son principalmente typescript y javascript. Typescript es soportado por nextjs y mongoose, este lenguaje añade un tipado a javascript que facilita la detección de errroes y evitar problemas en tiempo de ejecución. Y permite tener un mejor proceso de desarrollo al saber el tipo de dato que se está manejando.

La aplicación se ha implementado NextJS que permite una gestión de la web tanto del lado del cliente como del servidor. Proporcionando los llamados server components que permiten renderizar componentes en el servidor y enviarlos al cliente, los client components que son componentes que tienen una interaccción con el cliente y pueden cambiar su estado sin tener que recargar la página y las server actions que son las apis que se llaman desde el cliente en el servidor la cual se encarga de hacer las consultas a la base de datos y devolver los datos al cliente.

Enlace aplicación web: [ZabUI](https://compui.vercel.app/)

NextJS además proporciona utilidades como el enrutamiento, la gestión de la cache, la gestión de estilos y otras funcionalidades que facilitan mucho el desarrollo de la aplicación web.

La gestión de la autentificación se realiza mediante next-auth una librería que facilita la autentificación en nextjs. Además de permitir la autentificación con google, facebook, github y otras plataformas.

Para desplegar la aplicación he utilizado vercel que tiene una capa gratuita que permite desplegar applicaciones de nextjs, reactjs y otras librerias y frameworks de javascript. Además tiene una experiencia de usuario muy buena y es sencilla de utilizar. Mostrando logs, analiticas y otras funcionalidades que facilitan el despliegue de la aplicación. Te proporciona un dominio gratuito con un nombre personalizado.

Para la base de datos he utilizado mongodb que en el apartado [Analisis y diseño de la base de datos](#analisis-y-diseño-de-la-base-de-datos) se ha explicado como se ha diseñado la base de datos y porque se ha elegido mongodb. La base de datos se encuentra alojada en un cluster de mongodb atlas que proporciona una capa gratuita que permite almacenar 512mb de datos y 100 conexiones simultaneas. Además de proporcionar una interfaz muy amigable para la gestión de la base de datos y la creación de los clusters. Se puede localizar en cualquier región del mundo, selecciónando el cluster de la región que quieras.

Para los estilos he utilizado tailwindcss que es una librería de estilos que se implementan directamente en la clase de la etiqueta html. Proporciona muchas funcionalidades que facilitan la creación de estilos en la aplicación web. Tiene una documentación muy completa y facil de comprender. Los estilos de los componentes de la librería están hechos con tailwindcss.

# Interfaz de usuario

## Descripción de la interfaz

