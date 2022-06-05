<?php

namespace App\Http\Controllers\Api;

use App\Tag;
use App\RealWorld\Transformers\TagTransformer;
use Illuminate\Support\Facades\DB;

class TagController extends ApiController
{
    /**
     * TagController constructor.
     *
     * @param TagTransformer $transformer
     */
    public function __construct(TagTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    /**
     * Get all the tags.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        //$tags = Tag::all()->pluck('name');

        $tagsCount = DB::table('article_tag')->join('tags', 'article_tag.tag_id', '=', 'tags.id')->select(array('tags.name', DB::raw('COUNT(tag_id) as countTags')))->groupBy('tags.name')->get();

        return $this->respondWithTransformer($tagsCount);
    }
}
