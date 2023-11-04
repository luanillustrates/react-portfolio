export default function Portfolio() {
  return (
    <>
      <h1 className="mb-5 text-9xl font-bold">Portfolio</h1>
      <div className="container flex flex-row justify-center">
        {/* portfolio item #1 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <a href="https://delt-fitness-e-commerce-36c3e8da33f5.herokuapp.com/">
              <img
                src="src\assets\images\delt.jpg"
                alt="Delt Supplies screenshot"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              E-Commerce
              <div className="badge badge-secondary">Featured</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Full-stack</div>
            </div>
          </div>
        </div>
        {/* portfolio item #2 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <a href="https://pwa-text-editor-install-4943d17f6d17.herokuapp.com/">
              <img
                src="src\assets\images\jate.jpg"
                alt="text editor application"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Text Editor</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">PWA</div>
            </div>
          </div>
        </div>
        {/* portfolio item #3 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <a href="https://jujusoi.github.io/Project-1/index.html">
              <img
                src="src\assets\images\recipe.jpg"
                alt="Recipe Radar screenshot"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">3rd party API application</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">PWA</div>
            </div>
          </div>
        </div>
        {/* portfolio item #4 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <a href="https://luanillustrates.github.io/luantran_wk06_weatherdash/">
              <img src="src\assets\images\weather.jpg" alt="Shoes" />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Weather Dashboard</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">PWA</div>
            </div>
          </div>
        </div>
        {/* portfolio item #5 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <a href="https://luanillustrates.github.io/luantran_wk06_weatherdash/">
              <img src="src\assets\images\delt.jpg" alt="Shoes" />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Weather Dashboard</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">PWA</div>
            </div>
          </div>
        </div>
        {/* portfolio item #6 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <a href="https://luanillustrates.github.io/luantran_wk06_weatherdash/">
              <img src="src\assets\images\delt.jpg" alt="Shoes" />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Weather Dashboard</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">PWA</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
