<template class="dysfunction1">

    <div>
      <h1>Dysfonctionnements des systèmes</h1>
      <p>Découvrez les conséquences des dysfonctionnements dans les systèmes humains et océaniques.</p>
      <p>Lorsque le système circulatoire humain est défaillant, cela peut entraîner des problèmes tels que l'hypertension, tout comme un courant marin défaillant perturbe l'écosystème marin.</p>
      <p>Il est essentiel de maintenir un équilibre pour la santé des deux systèmes.</p>
    </div>

    <div class="illustration">
        <img src="../../Image/dysfunction.png" alt="Illustration des parallèles entre humains et océans">
    </div>

    <section id="dysfunctions" class="section">
        <h2>Dysfonctionnements des systèmes</h2>
        <p>Découvrez les conséquences des dysfonctionnements dans les systèmes humains et océaniques :</p>
        <ul>
            <li>
                <strong>Système circulatoire vs Courants marins :</strong> 
                Une insuffisance circulatoire humaine, comme l'hypertension, affecte les organes. De même, des courants marins perturbés déséquilibrent le climat et les écosystèmes.
            </li>
            <li>
                <strong>Système respiratoire vs Oxygénation des océans :</strong> 
                Les maladies pulmonaires limitent l'échange d'oxygène. Les zones mortes océaniques, causées par l'acidification, privent la vie marine de l'oxygène nécessaire.
            </li>
            <li>
                <strong>Système immunitaire vs Résilience écologique :</strong> 
                Un système immunitaire affaibli rend l'organisme vulnérable. La pollution marine affaiblit les océans, rendant les écosystèmes sensibles aux crises comme le blanchissement des coraux.
            </li>
            <li>
                <strong>Système digestif vs Chaîne alimentaire marine :</strong> 
                Les troubles digestifs nuisent à l'absorption des nutriments. La surpêche épuise les stocks essentiels à la survie des espèces marines.
            </li>
            <li>
                <strong>Système nerveux vs Signaux océaniques :</strong> 
                Les troubles neurologiques perturbent les fonctions corporelles. Les changements de température désorientent les migrations des espèces marines.
            </li>
        </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Dysfunction',
  };
  </script>
  
  <style scoped>
  h1 {
    color: #e74c3c;
  }
  .dysfunction1 {
    padding-top: 35px;
  }
  .section {
      margin-bottom: 40px;
  }
  .section h2 {
      color: #003366;
      font-size: 2em;
      margin-bottom: 10px;
  }
  .section p {
      line-height: 1.6;
      font-size: 1.1em;
  }
  .cta {
      text-align: center;
      margin: 20px 0;
  }
  .cta a {
      background-color: #003366;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      font-size: 1.2em;
      border-radius: 5px;
  }
  .cta a:hover {
      background-color: #00509e;
  }
  .illustration {
      text-align: center;
      margin: 20px 0;
  }
  .illustration img {
      max-width: 100%;
      height: auto;
      border-radius: 10px;
  }
  ul {
      list-style-type: disc;
      padding-left: 20px;
  }
  </style>
  

  