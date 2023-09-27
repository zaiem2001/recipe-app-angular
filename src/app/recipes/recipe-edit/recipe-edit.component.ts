import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = this.id === 0 ? true : !!this.id;
      this.initForm();
    });
  }

  private initForm() {
    const recipeData = {
      name: '',
      description: '',
      imagePath: '',
      ingredients: new FormArray([]),
    };

    if (this.editMode) {
      const { name, description, imagePath, ingredients } =
        this.recipeService.getRecipe(this.id);

      recipeData.name = name;
      recipeData.description = description;
      recipeData.imagePath = imagePath;
      if (ingredients?.length) {
        ingredients.forEach((ing) =>
          recipeData.ingredients.push(
            new FormGroup({
              name: new FormControl(ing.name, Validators.required),
              amount: new FormControl(ing.amount, Validators.required),
            })
          )
        );
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeData.name, Validators.required),
      imagePath: new FormControl(recipeData.imagePath, Validators.required),
      description: new FormControl(recipeData.description, Validators.required),
      ingredients: recipeData.ingredients,
    });
  }

  onAddIngredient() {
    const control = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
    });

    (<FormArray>this.recipeForm.get('ingredients')).push(control);
  }

  getIngredientCtrls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onResetForm() {
    if (this.editMode) {
      const recipeData = this.recipeService.getRecipe(this.id);
      this.recipeForm.reset(recipeData);
    } else {
      this.recipeForm.reset();
    }
  }

  onSubmit() {
    this.recipeService.addOrUpdateRecipe(
      this.recipeForm.value,
      this.editMode,
      this.id
    );
    this.navigateToRecipe();
  }

  navigateToRecipe() {
    this.recipeForm.reset();
    if (this.editMode) {
      this.router.navigate(['recipes', `${this.id}`]);
    } else {
      this.router.navigate(['recipes']);
    }
  }

  onDeleteIngredient(idx: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(idx);
  }
}
