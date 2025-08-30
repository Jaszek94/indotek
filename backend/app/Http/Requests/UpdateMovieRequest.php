<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMovieRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'age_rating_id' => 'required|exists:age_ratings,id',
        ];
    }

    /**
     * Get custom error messages for validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'title.required' => 'A cím megadása kötelező.',
            'title.string' => 'A címnek szövegesnek kell lennie.',
            'title.max' => 'A cím nem lehet hosszabb 255 karakternél.',
            'description.required' => 'A leírás megadása kötelező.',
            'description.string' => 'A leírásnak szövegesnek kell lennie.',
            'age_rating_id.required' => 'Az életkori besorolás megadása kötelező.',
            'age_rating_id.exists' => 'Az életkori besorolás érvénytelen.',
        ];
    }
}
