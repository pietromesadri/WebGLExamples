function main() {
  const canvas = document.querySelector("#glCanvas");
  const gl = canvas.getContext("webgl");

  const vsSource = getVertexShader();
  const fsSource = getFragmentShader();

  if (gl === null) {
    alert("Unable to initialize WebGL!");
    return;
  }

  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };

  const buffers = initBuffers(gl);
  drawScene(gl, programInfo, buffers);
}



main();