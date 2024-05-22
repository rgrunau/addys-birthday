import { put } from '@vercel/blob'
import type { PutBlobResult } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse> { 
  
  const { searchParams } = new URL(req.url);
  const fileName = searchParams.get('filename') as string;
  console.log('fileName:', fileName);
  if (!fileName) {
    return new NextResponse('Missing file name', { status: 400 });
  }
  if (!req.body) {
    return new NextResponse('Missing file body', { status: 400 });
  }
  const blob = await put(fileName, req.body, {
    access: 'public',
  })

  return NextResponse.json(blob as PutBlobResult)

}