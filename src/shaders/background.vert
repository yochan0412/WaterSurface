#version 430 core

layout (location = 0) in vec3 position;


layout (std140, binding = 0) uniform commom_matrices
{
    mat4 u_projection;
    mat4 u_view;
};

uniform mat4 u_model;

out vec3 o_position;

void main()
{ 
    mat4 noScaleView = mat4( mat3(u_view));
    gl_Position = u_projection * noScaleView * u_model * vec4(position, 1.0f);
    o_position = vec3(u_model * vec4(position, 1.0f));
}