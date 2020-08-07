from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.http import HttpResponse

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from board.models import Post, Comment
from board.serializers import PostSerializer, CommentSerializer

@api_view(['GET', 'POST'])
def index(request, pageInfo_id):
    """
        GET     | category에 따라서 board 리스트를 보여줍니다.
        POST    | 게시글을 등록합니다. 
    """
    if request.method == "GET":
        posts = get_list_or_404(Post, pageInfo=pageInfo_id)
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST": # 게시글 등록
        serializer = PostSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True): #is_valid()에서 비속어 처리도 진행
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST', 'DELETE'])
def detail(request, post_id):
    """
        GET     | post_id 에 해당하는 post 리스트를 보여줍니다.
        DELETE  | post_id 에 해당하는 post 를 삭제합니다.
    """
    post = get_object_or_404(Post, pk=post_id)

    if request.method == "GET": # 게시글 하나 보여주기
        serializer = PostSerializer(post)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == "DELETE": # 게시글 하나 삭제
        post.delete()
        return Response({'message' : '삭제 성공!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def comment_list(request, post_id):
    """
        GET     | post_id를 기준으로 comment list를 가져옵니다. 
        POST    | post_id를 기준으로 comment를 등록합니다.
    """
    post = get_object_or_404(Post, pk=post_id)

    if request.method == "GET": # 댓글 보여주기
        comments = get_list_or_404(Comment, post=post_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)

    if request.method == "POST": # 댓글 등록
        serializer = CommentSerializer(request.data)
        if serializer.is_valid(): #is_valid()에서 비속어 처리도 진행 <- 참고로 comment에는 아직 안넣었는데 복붙할까요? 넵!
            serializer.save(post=post)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def comment_delete(request, comment_id):
    """
        delete | comment id를 기준으로 comment를 삭제합니다.
    """
    if request.method == "DELETE": # 댓글삭제
        comment = get_object_or_404(Comment, pk=comment_id)        
        comment.delete()
        return Response({'message' : '삭제 성공!'}, status = status.HTTP_204_NO_CONTENT)
