window.addEventListener('DOMContentLoaded', function() { 


    let css = 'color: black; font-size: 14px; font-weight: bold; padding: 15px 0;'

    let elsExercice = document.querySelectorAll('[data-js-exercice]');


    /**
     * Exercice 1
     * Vous avez ci-bas une structure DOM sous forme d’arborescence HTML.
     * Vous devez recréer et injecter dynamiquement à l’intérieur de la page cette même structure en utilisant les différentes propriétés et méthodes de création et manipulation DOM vues en classe.
     * Votre structure devra reproduire exactement le même arbre DOM que celui illustré par le code HTML.
     * Vous aurez compris que vous ne pouvez pas utiliser la syntaxe des littéraux de gabarits pour cet exercice.
     * Notez également que tous les styles sont déjà définis.
     */

    console.log('%cExercice 1', css);

    /*
    <form enctype="multipart/form-data" method="post" action="upload.php" data-js-form>
        <fieldset>
            <legend>Uploader une image</legend>
            <div class="text-center">
                <label for="upload-image">Image à uploader :</label>
                <input type="file" name="upload-image" id="upload-image">
                <input type="submit" value="Envoyer">
            </div>
        </fieldset>
    </form>
    */

    let elSection1 = document.querySelector('[data-js-exercice="1"]');

    let elForm = {
        form: document.createElement('form'),
        fieldset: document.createElement('fieldset'),
        legend: document.createElement('legend'),
        div: document.createElement('div'),
        input1: document.createElement('input'),
        input2: document.createElement('input'),
        label: document.createElement('label')
    },
    textForm = {
        un: document.createTextNode('Image à uploader :'),
        deux: document.createTextNode('Uploader une image')
    }
    // attribut d'element label
    elForm.label.setAttribute('for', 'upload-image');
    // injection text dans element label
    elForm.label.append(textForm.un);
    
    // attribut d'element input file upload
    elForm.input1.setAttribute('type', 'file');
    elForm.input1.setAttribute('name', 'upload-image');
    elForm.input1.setAttribute('id', 'upload-image');
    
    // attribut d'element input submit
    elForm.input2.setAttribute('type', 'submit');
    elForm.input2.setAttribute('value', 'Envoyer');
    
    // injection text dans element legend
    elForm.legend.append(textForm.deux);

    // attribut d'element div
    elForm.div.setAttribute('class', 'text-center');
    // injection element label et input
    elForm.div.append(elForm.label);
    elForm.div.append(elForm.input1);
    elForm.div.append(elForm.input2);
    
    // injection element legend et div
    elForm.fieldset.append(elForm.legend);
    elForm.fieldset.append(elForm.div);
    
    // element form
    elForm.form.setAttribute('enctype', 'multipart/form-data');
    elForm.form.setAttribute('method', 'post');
    elForm.form.setAttribute('action', 'upload.php');
    elForm.form.setAttribute('data-js-form','');
    // injection element fieldset
    elForm.form.append(elForm.fieldset);
    
    // injection element form 
    elSection1.append(elForm.form);
    
    /**
     * Exercice 2 (1)
     * Vous avez un élément <div>, replacez les éléments <p> suivants selon le positionnement décrit à l’intérieur de leur nœud texte respectif.
     * Ici encore, les styles sont déjà définis.
     */

    console.log('%cExercice 2', css);

    let elSection2 = document.querySelector('[data-js-exercice="2"]'),
        elDiv = elSection2.querySelector('div');
        elP = elSection2.querySelectorAll('p');

    elDiv.append(elP[2]);
    elDiv.append(elP[4]);
    elDiv.append(elP[0]);
    elDiv.append(elP[5]);
    elSection2.insertBefore(elP[3], elDiv);


    /**
     * Exercice 3 (1)
     * Vous avez une liste numérotée.
     * À chaque clic sur le bouton, vous devez supprimer le dernier élément de la liste.
     * S’il n’y a plus d’élément à supprimer, assurez-vous qu’il n’y ait pas d’erreur JavaScript
     * et faites un console.log() annonçant qu’il n’y a plus rien à supprimer.
     */

    console.log('%cExercice 3', css);
    
    let elSection3 = document.querySelector('[data-js-exercice="3"]'),
        elUl = elSection3.querySelector('[data-js-list]'),
        elBouton = elSection3.querySelector('[data-js-btn]');

    elBouton.addEventListener('click', function(e) {
		
        e.preventDefault();
        //verification de condition
        if (elUl.lastElementChild) {
            elUl.removeChild(elUl.lastElementChild);
        } else {
            console.log('il n\'y a plus rien à supprimer');
        }
    })
        




    /**
     * Exercice 4 (2)
     * Vous avez une structure HTML.
     * À chaque clic sur une flèche (haut ou bas), vous devez réorganiser l’ordre des éléments du DOM selon la direction de la flèche cliquée.
     * Tâchez de faire votre logique, je saurai reconnaître celles copiées d’internet.
     */

    console.log('%cExercice 4', css);


    let elSection4 = document.querySelector('[data-js-exercice="4"]'),
        elDivEx4 = elSection4.querySelector('[data-js-parent]'),
        elBoutonHaut = elDivEx4.querySelectorAll('.fleche--haut'),
        elBoutonBas = elDivEx4.querySelectorAll('.fleche--bas');
    
    
    for (let i = 0, l = elBoutonHaut.length; i < l; i++) {

        // clic sur une flèche haut 
        elBoutonHaut[i].addEventListener('click', function() {
            
            let elParent = elBoutonBas[i].parentElement;

            //verification de condition
            if (elParent.previousElementSibling) {
                elParent.parentNode.insertBefore(elParent, elParent.previousElementSibling);
            }
        });
    }

   
    for (let i = 0, l = elBoutonBas.length; i <  l; i++) {

        // clic sur une flèche bas 
        elBoutonBas[i].addEventListener('click', function() {

            let elParent = elBoutonBas[i].parentElement;

            //verification de condition
            if (elParent.nextElementSibling) {
                elParent.parentNode.insertBefore(elParent.nextElementSibling, elParent);
            }
        });
    }

});