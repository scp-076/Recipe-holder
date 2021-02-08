<?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use App\Models\Recipe;
    use Validator;

    class RecipesController extends Controller {
        /**
         * Display a listing of the resource.
         *
         * @param \Illuminate\Http\Request $request
         * @return \Illuminate\Http\Response
         */
        public function index(Request $request) {
            $user = $request->user();
            return Recipe::where('user_id', $user->id)->get();
        }

        /**
         * Show the form for creating a new resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function create() {
            //
        }

        /**
         * Store a newly created resource in storage.
         *
         * @param \Illuminate\Http\Request $request
         */
        public function store(Request $request) {
            $user = $request->user();
            if ($user) {
                $validator = Validator::make(
                    $request->all(),
                    [
                        'title' => ['required'],
                        'ingredients' => ['required'],
                        'body' => ['required'],
                    ],
                );
                if ($validator->fails()) {
                    return [
                        "status" => false,
                        "errors" => $validator->messages(),
                    ];
                }

                $recipe = Recipe::create([
                    "title" => $request->title,
                    "ingredients" => $request->ingredients,
                    "body" => $request->body,
                    "user_id" => $user->id,
                ]);

                return [
                    "status" => true,
                    "recipe" => $recipe,
                ];
            }
            return false;
        }

        /**
         * Display the specified resource.
         *
         * @param int $id
         */
        public function show($id) {
            $recipe = Recipe::find($id);
            if (!$recipe) {
                return response()->json([
                    "status" => false,
                    "message" => "Recipe not found",
                ])->setStatusCode(404);
            }

            return $recipe;
        }

        /**
         * Show the form for editing the specified resource.
         *
         * @param int $id
         * @return \Illuminate\Http\Response
         */
        public function edit($id) {

        }

        /**
         * Update the specified resource in storage.
         *
         * @param \Illuminate\Http\Request $request
         * @param int $id
         * @return
         */
        public function update(Request $request, $id) {
            $user = $request->user();
            if ($user) {
                $validator = Validator::make(
                    $request->all(),
                    [
                        'title' => ['required'],
                        'ingredients' => ['required'],
                        'body' => ['required'],
                    ],
                );
                if ($validator->fails()) {
                    return [
                        "status" => false,
                        "errors" => $validator->messages(),
                    ];
                }
                $recipe = Recipe::find($id);
                $recipe->update([
                    "title" => $request->title,
                    "ingredients" => $request->ingredients,
                    "body" => $request->body,
                ]);
                return [
                    "status" => true,
                ];
            }
            return false;
        }

        /**
         * Remove the specified resource from storage.
         *
         * @param int $id
         * @return \Illuminate\Http\Response
         */
        public function destroy($id) {
            $recipe = Recipe::findOrFail($id);
            $recipe->delete();
            return true;
        }
    }
