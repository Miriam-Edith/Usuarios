import axios from "axios";

// Obtener los detalles del usuario usando su ID
async function getUsuario(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const usuario = await axios.get(url);
  return usuario.data;
}

export default async function Usuario({ params }) {
  const usuario = await getUsuario(params.id);

  return (
    <div className="container">
      <h1 className="text-center my-4">Detalles del Usuario</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">ID: {usuario.id}</h5>
          <p className="card-text"><strong>Nombre:</strong> {usuario.name}</p>
          <p className="card-text"><strong>Username:</strong> {usuario.username}</p>
          <p className="card-text"><strong>Email:</strong> {usuario.email}</p>
          <p className="card-text"><strong>Teléfono:</strong> {usuario.phone}</p>
          <p className="card-text"><strong>Sitio web:</strong> <a href={`http://${usuario.website}`} target="_blank" rel="noopener noreferrer">{usuario.website}</a></p>

          <h5 className="mt-4">Dirección</h5>
          <p className="card-text">
            <strong>Calle:</strong> {usuario.address.street}<br />
            <strong>Suite:</strong> {usuario.address.suite}<br />
            <strong>Ciudad:</strong> {usuario.address.city}<br />
            <strong>Código Postal:</strong> {usuario.address.zipcode}<br />
            <strong>Coordenadas:</strong> {`Latitud: ${usuario.address.geo.lat}, Longitud: ${usuario.address.geo.lng}`}
          </p>

          <h5 className="mt-4">Compañía</h5>
          <p className="card-text">
            <strong>Nombre:</strong> {usuario.company.name}<br />
            <strong>Lema:</strong> {usuario.company.catchPhrase}<br />
            <strong>Descripción:</strong> {usuario.company.bs}
          </p>
        </div>
      </div>
    </div>
  );
}
