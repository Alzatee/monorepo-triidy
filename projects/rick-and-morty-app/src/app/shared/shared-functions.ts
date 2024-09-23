import Swal from 'sweetalert2';
import { Router } from '@angular/router';

export function openErrorModal(message: string): void {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
        footer: 'También puedes contactar con un administrador'
    });
}

export function navigateToStart(router: Router): void {
    router.navigate(['characters']);
}

export function createCharacterQuery(characterId: number): string {
    return `
      query {
        character(id: ${characterId}) {
          id,
          name,
          image,
    	    gender,
    	    species,
    	    status,
    	    created,
    	    episode { id, name },
    		  location { id, name },
    		  origin { id, name }
        }
      }
    `;
}

export function createCharacterSearchQuery(page: number, characterName: string): string {
    // Solo consulto los datos necesarios que debe mostrar ya que este query es controlado.
    return `
      query {
        characters(page: ${page}, filter: { name: "${characterName}" }) {
          info {
            count,
            next,
            pages,
            prev
          }
          results {
            name,
            image,
            species,
            id
          }
        }
      }
    `;
}