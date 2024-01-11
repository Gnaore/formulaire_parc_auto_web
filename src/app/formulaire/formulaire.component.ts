import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@services/api.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import Swal from 'sweetalert2';

const PrimaryWhite = '#dd0031';
const SecondaryGrey = '#1976d2';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})



export class FormulaireComponent implements OnInit {

  constructor(private apiService: ApiService, private formBuilder: FormBuilder,) { }


  formGroup!: FormGroup;

  lienPhotoretourCarteGrise: string = '../../assets/dist/img/noPhoto.jpg';
  lienPhotoretourAssurance: string = '../../assets/dist/img/noPhoto.jpg';
  lienPhotoretourVisitetechnique: string = '../../assets/dist/img/noPhoto.jpg';
  lienPhotoretourFaceavant: string = '../../assets/dist/img/noPhoto.jpg';
  lienPhotoretourFacearriere: string = '../../assets/dist/img/noPhoto.jpg';
  lienPhotoretourLateralgauche: string = '../../assets/dist/img/noPhoto.jpg';
  lienPhotoretourLateraldroit: string = '../../assets/dist/img/noPhoto.jpg';

  loaderCartegrise: boolean = false;
  loaderAssurance: boolean = false;
  loaderVisitetechnique: boolean = false;
  loaderFaceavant: boolean = false;
  loaderFacearriere: boolean = false;
  loaderLateraldroit: boolean = false;
  loaderLateralgauche: boolean = false;

  public primaryColour = PrimaryWhite;
  public secondaryColour = SecondaryGrey;

  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    primaryColour: this.primaryColour,
    secondaryColour: this.secondaryColour,
    backdropBorderRadius: '3px',
  };


  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;


  ret: any;

  ngOnInit(): void {
    this.init_formGroup();
  }

  init_formGroup() {
    this.formGroup = this.formBuilder.group({
      id: [''],
      matricule: ['', Validators.required],
      nomprenoms: ['', Validators.required],
      faceavant: ['', Validators.required],
      facearriere: ['', Validators.required],
      latteraldroit: ['', Validators.required],
      latteralgauche: ['', Validators.required],
      cartegrise: ['', Validators.required],
      assurance: ['', Validators.required],
      visitetechnique: ['', Validators.required],
      direction: [''],
      fonctionagent: ['']
    });
  }

  onFileCarteGrise(event: any) {
    if (event.target.files.length > 0) {
      this.loaderCartegrise = true
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.lienPhotoretourCarteGrise = e.target.result;
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('image', file);
      this.apiService.upload(formData).subscribe(
        (ret) => {
          this.ret = ret;
          this.lienPhotoretourCarteGrise = this.ret.path;
          this.formGroup.controls['cartegrise'].setValue(this.ret.data);
          this.loaderCartegrise = false
        },
        (err) => {
          this.lienPhotoretourCarteGrise = '../../assets/dist/img/noPhoto.jpg';
          this.loaderCartegrise = false
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message,
          });
        }

      );
    }
  }


  onFileAssurance(event: any) {

    if (event.target.files.length > 0) {
      this.loaderAssurance = true
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.lienPhotoretourAssurance = e.target.result;
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('image', file);
      this.apiService.upload(formData).subscribe(
        (ret) => {
          this.ret = ret;
          this.lienPhotoretourAssurance = this.ret.path;
          this.formGroup.controls['assurance'].setValue(this.ret.data);
          this.loaderAssurance = false
        },
        (err) => {
          this.lienPhotoretourAssurance = '../../assets/dist/img/noPhoto.jpg';
          this.loaderAssurance = false
        }
      );
    }
  }

  onFileVisitetechnique(event: any) {

    if (event.target.files.length > 0) {
      this.loaderVisitetechnique = true
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.lienPhotoretourVisitetechnique = e.target.result;
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('image', file);
      this.apiService.upload(formData).subscribe(
        (ret) => {
          this.ret = ret;
          this.lienPhotoretourVisitetechnique = this.ret.path;
          this.formGroup.controls['visitetechnique'].setValue(this.ret.data);
          this.loaderVisitetechnique = false
        },
        (err) => {
          console.log(err);
          this.lienPhotoretourVisitetechnique = '../../assets/dist/img/noPhoto.jpg';
          this.loaderVisitetechnique = false
        }
      );
    }
  }
  onFileFaceavant(event: any) {

    if (event.target.files.length > 0) {
      this.loaderFaceavant = true
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.lienPhotoretourFaceavant = e.target.result;
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('image', file);
      this.apiService.upload(formData).subscribe(
        (ret) => {
          this.ret = ret;
          this.lienPhotoretourFaceavant = this.ret.path;
          this.formGroup.controls['faceavant'].setValue(this.ret.data);
          this.loaderFaceavant = false
        },
        (err) => {
          console.log(err);
          this.lienPhotoretourFaceavant = '../../assets/dist/img/noPhoto.jpg';
          this.loaderFaceavant = false
        }
      );
    }
  }
  onFileFacearriere(event: any) {

    if (event.target.files.length > 0) {
      this.loaderFacearriere = true
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.lienPhotoretourFacearriere = e.target.result;
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('image', file);
      this.apiService.upload(formData).subscribe(
        (ret) => {
          this.ret = ret;
          this.lienPhotoretourFacearriere = this.ret.path;
          this.formGroup.controls['facearriere'].setValue(this.ret.data);
          this.loaderFacearriere = false
        },
        (err) => {
          console.log(err);
          this.lienPhotoretourFacearriere = '../../assets/dist/img/noPhoto.jpg';
          this.loaderFacearriere = false
        }
      );
    }
  }
  onFileLateralgauche(event: any) {

    if (event.target.files.length > 0) {
      this.loaderLateralgauche = true
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.lienPhotoretourLateralgauche = e.target.result;
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('image', file);
      this.apiService.upload(formData).subscribe(
        (ret) => {
          this.ret = ret;
          this.lienPhotoretourLateralgauche = this.ret.path;
          this.formGroup.controls['latteralgauche'].setValue(this.ret.data);
          this.loaderLateralgauche = false
        },
        (err) => {
          console.log(err);
          this.lienPhotoretourLateralgauche = '../../assets/dist/img/noPhoto.jpg';
          this.loaderLateralgauche = false
        }
      );
    }
  }
  onFileLateraldroit(event: any) {

    if (event.target.files.length > 0) {
      this.loaderLateraldroit = true
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.lienPhotoretourLateraldroit = e.target.result;
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('image', file);
      this.apiService.upload(formData).subscribe(
        (ret) => {
          this.ret = ret;
          this.lienPhotoretourLateraldroit = this.ret.path;
          this.formGroup.controls['latteraldroit'].setValue(this.ret.data);
          this.loaderLateraldroit = false
        },
        (err) => {
          console.log(err);
          this.lienPhotoretourLateraldroit = '../../assets/dist/img/noPhoto.jpg';
          this.loaderLateraldroit = false
        }
      );
    }
  }


  onSubmit(f: any) {

    var boby = {
      id: parseInt(f.id),
      matricule: f.matricule,
      nomprenoms: f.nomprenoms,
      faceavant: f.faceavant,
      facearriere: f.facearriere,
      latteraldroit: f.latteraldroit,
      latteralgauche: f.latteralgauche,
      cartegrise: f.cartegrise,
      assurance: f.assurance,
      visitetechnique: f.visitetechnique,
      direction: f.direction,
      fonctionagent: f.fonctionagent
    };

    this.apiService.ajoutFormulaire(boby).subscribe(
      (ret) => {
        this.ret = ret;
        if (this.ret.success == true) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Enregistrement terminé',
            showConfirmButton: false,
            timer: 1500,
          });
          this.reset();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: this.ret.status_message,
          });
        }

      },
      (err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.message,
        });
      }
    );
  }

  reset() {
    this.formGroup.reset();
    this.lienPhotoretourCarteGrise = '../../assets/dist/img/noPhoto.jpg';
    this.lienPhotoretourAssurance = '../../assets/dist/img/noPhoto.jpg';
    this.lienPhotoretourVisitetechnique = '../../assets/dist/img/noPhoto.jpg';
    this.lienPhotoretourFaceavant = '../../assets/dist/img/noPhoto.jpg';
    this.lienPhotoretourFacearriere = '../../assets/dist/img/noPhoto.jpg';
    this.lienPhotoretourLateralgauche = '../../assets/dist/img/noPhoto.jpg';
    this.lienPhotoretourLateraldroit = '../../assets/dist/img/noPhoto.jpg';
  }

}
